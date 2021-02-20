using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class SeedValues : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "TValue",
                columns: new[] { "Id", "DisplayName" },
                values: new object[] { "1", "Walter" });

            migrationBuilder.InsertData(
                table: "TValue",
                columns: new[] { "Id", "DisplayName" },
                values: new object[] { "2", "Jackie" });

            migrationBuilder.InsertData(
                table: "TValue",
                columns: new[] { "Id", "DisplayName" },
                values: new object[] { "3", "Althea" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TValue",
                keyColumn: "Id",
                keyValue: "1");

            migrationBuilder.DeleteData(
                table: "TValue",
                keyColumn: "Id",
                keyValue: "2");

            migrationBuilder.DeleteData(
                table: "TValue",
                keyColumn: "Id",
                keyValue: "3");
        }
    }
}
