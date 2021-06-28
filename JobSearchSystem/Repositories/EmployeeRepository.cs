namespace JobSearchSystem.Repositories
{
	using JobSearchSystem.Interfaces.Repositories;
	using JobSearchSystem.Interfaces.Services;
	using JobSearchSystem.Models;
	using System.Threading.Tasks;

	public class EmployeeRepository : IEmployeeRepository
	{
		private readonly IEmployeeServices _employeeServices;

		public EmployeeRepository(IEmployeeServices employeeServices)
		{
			_employeeServices = employeeServices;
		}

		public async Task Add(Employee employee)
		{
			await _employeeServices.InsertEmployee(employee);
		}
	}
}