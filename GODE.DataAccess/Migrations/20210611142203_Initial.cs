using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GODE.DataAccess.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Achievements",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Index = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Achievements", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AchievementUser",
                columns: table => new
                {
                    AchievementsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UsersId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AchievementUser", x => new { x.AchievementsId, x.UsersId });
                    table.ForeignKey(
                        name: "FK_AchievementUser_Achievements_AchievementsId",
                        column: x => x.AchievementsId,
                        principalTable: "Achievements",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AchievementUser_User_UsersId",
                        column: x => x.UsersId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Goals",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ShortDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Completed = table.Column<bool>(type: "bit", nullable: false),
                    Important = table.Column<bool>(type: "bit", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Goals", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Goals_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProgressOnDates",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ShortDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Minutes = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProgressOnDates", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProgressOnDates_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Tasks",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Completed = table.Column<bool>(type: "bit", nullable: false),
                    EstimatedTime = table.Column<int>(type: "int", nullable: false),
                    Progress = table.Column<int>(type: "int", nullable: false),
                    ShortDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GoalId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tasks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tasks_Goals_GoalId",
                        column: x => x.GoalId,
                        principalTable: "Goals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tasks_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Achievements",
                columns: new[] { "Id", "Description", "Index", "Title" },
                values: new object[,]
                {
                    { new Guid("dff07765-c746-47df-be05-79f3d34b54f3"), "Complete 100 tasks to reach this achievement!", 0, "100 TASKS COMPLETED" },
                    { new Guid("226dcd3c-62c7-4387-9188-a4b8efce5c64"), "Complete 500 tasks to reach this achievement!", 1, "500 TASKS COMPLETED" },
                    { new Guid("7a6ad2b5-2645-4e57-84bc-f406b2ce2495"), "Complete 1000 tasks to reach this achievement!", 2, "1000 TASKS COMPLETED" },
                    { new Guid("1172a7c5-a378-497f-8491-5c0f24d0bd9e"), "Complete 1500 tasks to reach this achievement!", 3, "1500 TASKS COMPLETED" },
                    { new Guid("036e6e3a-4e40-4702-8d3d-93358b0df889"), "Complete 100 goals to reach this achievement!", 4, "100 GOALS COMPLETED" },
                    { new Guid("720e8878-a975-4aad-bcca-f977029ef535"), "Complete 350 goals to reach this achievement!", 5, "350 GOALS COMPLETED" },
                    { new Guid("2f50be65-170f-427d-8cd7-220914d96d06"), "Complete 700 goals to reach this achievement!", 6, "700 GOALS COMPLETED" },
                    { new Guid("c58ac02a-96f4-4649-8a6e-075c76cf37ca"), "Complete 1000 goals to reach this achievement!", 7, "1000 GOALS COMPLETED" },
                    { new Guid("699c9ec5-e660-4465-882c-d684229b3c9c"), "Complete 150 important goals to reach this achievement!", 8, "150 IMPORTANT GOALS COMPLETED" },
                    { new Guid("e06c8aba-735b-465a-a10d-ec57b7cad1a6"), "Earn 1000 minutes of progress to reach this achievement!", 9, "1000 MINUTES OF PROGRESS" },
                    { new Guid("8030c68a-fdad-4ada-b451-03715ccf0e2b"), "Complete 250 important goals to reach this achievement!", 10, "250 IMPORTANT GOALS COMPLETED" },
                    { new Guid("94855338-c063-417a-9b7e-2baa140cb65f"), "Earn 1500 minutes of progress to reach this achievement!", 11, "1500 MINUTES OF PROGRESS" }
                });

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "Id", "Username" },
                values: new object[] { new Guid("76c28a3c-b29e-46a2-9397-53f24edf4230"), "Robert" });

            migrationBuilder.CreateIndex(
                name: "IX_AchievementUser_UsersId",
                table: "AchievementUser",
                column: "UsersId");

            migrationBuilder.CreateIndex(
                name: "IX_Goals_UserId",
                table: "Goals",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_ProgressOnDates_UserId",
                table: "ProgressOnDates",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_GoalId",
                table: "Tasks",
                column: "GoalId");

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_UserId",
                table: "Tasks",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AchievementUser");

            migrationBuilder.DropTable(
                name: "ProgressOnDates");

            migrationBuilder.DropTable(
                name: "Tasks");

            migrationBuilder.DropTable(
                name: "Achievements");

            migrationBuilder.DropTable(
                name: "Goals");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
