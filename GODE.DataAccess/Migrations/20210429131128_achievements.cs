using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GODE.DataAccess.Migrations
{
    public partial class achievements : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Achievements",
                columns: new[] { "Id", "Description", "Index", "Title" },
                values: new object[,]
                {
                    { new Guid("65763fa5-9ca7-4617-b808-2fd90243eaad"), "Complete 100 tasks to reach this achievement!", 0, "100 TASKS COMPLETED" },
                    { new Guid("a3f23aba-2bbd-4259-aabd-a425aae41a47"), "Complete 500 tasks to reach this achievement!", 1, "500 TASKS COMPLETED" },
                    { new Guid("a8c8b433-7a1d-45ed-8290-a01130352261"), "Complete 1000 tasks to reach this achievement!", 2, "1000 TASKS COMPLETED" },
                    { new Guid("93f7c8b2-0105-465c-903a-b0335a15b253"), "Complete 1500 tasks to reach this achievement!", 3, "1500 TASKS COMPLETED" },
                    { new Guid("d297ea34-38ba-4fcc-9ecd-06fea9d9fbeb"), "Complete 100 goals to reach this achievement!", 4, "100 GOALS COMPLETED" },
                    { new Guid("4562b1a2-b4b5-4464-91ef-5378262db9ea"), "Complete 350 goals to reach this achievement!", 5, "350 GOALS COMPLETED" },
                    { new Guid("6a835d3d-574d-4b9f-aefc-880adbfe54c3"), "Complete 700 goals to reach this achievement!", 6, "700 GOALS COMPLETED" },
                    { new Guid("a13445ca-0e9b-4ec3-93f1-e2bcc09c8d8a"), "Complete 1000 goals to reach this achievement!", 7, "1000 GOALS COMPLETED" },
                    { new Guid("54bf89e0-ca53-4ccb-9755-79589eb38a80"), "Complete 150 important goals to reach this achievement!", 8, "150 IMPORTANT GOALS COMPLETED" },
                    { new Guid("c607ec50-a8e5-42f4-b3ec-e94f714b05d2"), "Earn 1000 minutes of progress to reach this achievement!", 9, "1000 MINUTES OF PROGRESS" },
                    { new Guid("f2380a06-0587-4380-9664-d482224dbfd8"), "Complete 250 important goals to reach this achievement!", 10, "250 IMPORTANT GOALS COMPLETED" },
                    { new Guid("743f92de-6c4c-4fdf-912d-206388da7ade"), "Earn 1500 minutes of progress to reach this achievement!", 11, "1500 MINUTES OF PROGRESS" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("4562b1a2-b4b5-4464-91ef-5378262db9ea"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("54bf89e0-ca53-4ccb-9755-79589eb38a80"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("65763fa5-9ca7-4617-b808-2fd90243eaad"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("6a835d3d-574d-4b9f-aefc-880adbfe54c3"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("743f92de-6c4c-4fdf-912d-206388da7ade"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("93f7c8b2-0105-465c-903a-b0335a15b253"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("a13445ca-0e9b-4ec3-93f1-e2bcc09c8d8a"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("a3f23aba-2bbd-4259-aabd-a425aae41a47"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("a8c8b433-7a1d-45ed-8290-a01130352261"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("c607ec50-a8e5-42f4-b3ec-e94f714b05d2"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("d297ea34-38ba-4fcc-9ecd-06fea9d9fbeb"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("f2380a06-0587-4380-9664-d482224dbfd8"));
        }
    }
}
