namespace JobSearchSystem.Services
{
	using Dapper;
	using JobSearchSystem.Interfaces.Services;
	using JobSearchSystem.Models;
	using JobSearchSystem.Utilities;
	using Npgsql;
	using System;
	using System.Threading.Tasks;

	public class CompanyServices : ICompanyServices
	{
		public async Task InsertCompany(Company company)
		{
			using (var connection = new NpgsqlConnection(DataConfig.ConnectionString))
			{
				try
				{
					await connection.QueryAsync("INSERT INTO public.company(phone, companyname, email, cities, datecreated) " +
									 "VALUES (@phone, @companyName, @email, @cities, current_timestamp);",
									 new { phone = company.Phone, companyName = company.CompanyName, email = company.Email, cities = company.Cities });
				}
				catch (Exception ex)
				{
					// This is so no one can know which people are in your database with thier GSM-s
					if (ex.Message != "23505: duplicate key value violates unique constraint \"company_phone_key\"")
					{
						throw new Exception();
					}
				}
			}
		}
	}
}