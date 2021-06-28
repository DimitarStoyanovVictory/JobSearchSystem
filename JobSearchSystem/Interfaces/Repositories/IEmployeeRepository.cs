namespace JobSearchSystem.Interfaces.Repositories
{
	using JobSearchSystem.Models;
	using System.Threading.Tasks;

	public interface IEmployeeRepository
	{
		public Task Add(Employee employee);
	}
}