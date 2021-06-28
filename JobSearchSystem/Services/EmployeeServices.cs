namespace JobSearchSystem.Services
{
	using Dapper;
	using JobSearchSystem.Interfaces.Services;
	using JobSearchSystem.Models;
	using JobSearchSystem.Utilities;
	using Npgsql;
	using System;
	using System.Threading.Tasks;

	public class EmployeeServices : IEmployeeServices
	{
		public async Task InsertEmployee(Employee employee)
		{
			using (var connection = new NpgsqlConnection(DataConfig.ConnectionString))
			{
				try
				{
					await connection.QueryAsync("INSERT INTO public.employee(phone, employeename, email, cities, datecreated) " +
									 "VALUES (@phone, @employeeName, @email, @cities, current_timestamp);",
									 new { phone = employee.Phone, employeeName = employee.EmployeeName, email = employee.Email, cities = employee.Cities });
				}
				catch (Exception ex)
				{
					// This is so no one can know which people are in your database with thier GSM-s
					if (ex.Message != "23505: duplicate key value violates unique constraint \"employee_phone_key\"")
					{
						throw new Exception();
					}
				}
			}
		}
	}
}