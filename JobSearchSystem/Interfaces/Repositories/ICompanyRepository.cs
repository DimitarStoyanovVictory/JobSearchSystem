namespace JobSearchSystem.Interfaces.Repositories
{
	using JobSearchSystem.Models;
	using System.Threading.Tasks;

	public interface ICompanyRepository
	{
		public Task Add(Company company);
	}
}