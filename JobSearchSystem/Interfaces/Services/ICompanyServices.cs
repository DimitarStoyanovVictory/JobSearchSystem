namespace JobSearchSystem.Interfaces.Services
{
	using JobSearchSystem.Models;
	using System.Threading.Tasks;

	public interface ICompanyServices
	{
		public Task InsertCompany(Company company);
	}
}