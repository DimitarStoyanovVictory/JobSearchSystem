namespace JobSearchSystem.Interfaces.Services
{
	using JobSearchSystem.Models;
	using System.Threading.Tasks;

	public interface IEmployeeServices
	{
		public Task InsertEmployee(Employee employee);
	}
}