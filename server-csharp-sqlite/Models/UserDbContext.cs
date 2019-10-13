using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace server_csharp_sqlite.Models
{

  public class UserDbContext : IdentityDbContext
  {
    public UserDbContext(DbContextOptions<UserDbContext> options) : base(options) { }
  }

}