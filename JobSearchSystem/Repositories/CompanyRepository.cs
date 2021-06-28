namespace JobSearchSystem.Repositories
{
	using JobSearchSystem.Interfaces.Repositories;
	using JobSearchSystem.Interfaces.Services;
	using JobSearchSystem.Models;
	using System.Threading.Tasks;

	public class CompanyRepository : ICompanyRepository
	{
		private readonly ICompanyServices _companyServices;

		public CompanyRepository(ICompanyServices companyServices)
		{
			_companyServices = companyServices;
		}

		public async Task Add(Company company)
		{
			await _companyServices.InsertCompany(company);
		}
	}
}