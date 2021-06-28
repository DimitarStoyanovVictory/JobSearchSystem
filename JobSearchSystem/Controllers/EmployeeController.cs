namespace JobSearchSystem.Controllers
{
	using JobSearchSystem.Interfaces.Repositories;
	using JobSearchSystem.Models;
	using Microsoft.AspNetCore.Mvc;
	using System.Threading.Tasks;

	public class EmployeeController : ControllerBase
	{
		private readonly IEmployeeRepository _employeeRepository;

		public EmployeeController(IEmployeeRepository employeeRepository)
		{
			_employeeRepository = employeeRepository;
		}

		[HttpPost]
		public async Task<IActionResult> AddEmployee([FromBody] Employee employee)
		{
			await _employeeRepository.Add(employee);
			return Ok();
		}
	}
}