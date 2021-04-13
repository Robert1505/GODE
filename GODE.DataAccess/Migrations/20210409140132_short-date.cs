using Microsoft.EntityFrameworkCore.Migrations;

namespace GODE.DataAccess.Migrations
{
    public partial class shortdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ShortDate",
                table: "ProgressOnDates",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ShortDate",
                table: "ProgressOnDates");
        }
    }
}
