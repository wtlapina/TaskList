using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Value> TValue { get; set; }
        public DbSet<TodoList> TTodoList { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Value>().HasData
            (
                new Value { Id = "1", DisplayName = "Walter" },
                new Value { Id = "2", DisplayName = "Jackie" },
                new Value { Id = "3", DisplayName = "Althea" }
            );
        }
    }
}