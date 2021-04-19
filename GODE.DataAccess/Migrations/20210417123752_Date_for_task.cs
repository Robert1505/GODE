using Microsoft.EntityFrameworkCore.Migrations;

namespace GODE.DataAccess.Migrations
{
    public partial class Date_for_task : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ShortDate",
                table: "Tasks",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ShortDate",
                table: "Tasks");
        }
    }
}
