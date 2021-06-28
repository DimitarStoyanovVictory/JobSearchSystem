namespace JobSearchSystem.Controllers
{
	using JobSearchSystem.Interfaces.Repositories;
	using JobSearchSystem.Models;
	using Microsoft.AspNetCore.Mvc;
	using System.Threading.Tasks;

	public class CompanyController : ControllerBase
	{
		private readonly ICompanyRepository _companyRepository;

		public CompanyController(ICompanyRepository companyRepository)
		{
			_companyRepository = companyRepository;
		}

		[HttpPost]
		public async Task<IActionResult> AddCompany([FromBody] Company company)
		{
			await _companyRepository.Add(company);
			return Ok();
		}
	}
}