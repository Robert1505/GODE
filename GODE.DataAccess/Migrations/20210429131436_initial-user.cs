﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GODE.DataAccess.Migrations
{
    public partial class initialuser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.InsertData(
                table: "Achievements",
                columns: new[] { "Id", "Description", "Index", "Title" },
                values: new object[,]
                {
                    { new Guid("46b08ff1-6204-4dc6-a558-e647f5e7ead3"), "Complete 100 tasks to reach this achievement!", 0, "100 TASKS COMPLETED" },
                    { new Guid("f4924d90-e5f7-4bd3-9156-10c11a5f1813"), "Complete 500 tasks to reach this achievement!", 1, "500 TASKS COMPLETED" },
                    { new Guid("82b05f85-3b05-48bd-8b30-2b8ebc4260c3"), "Complete 1000 tasks to reach this achievement!", 2, "1000 TASKS COMPLETED" },
                    { new Guid("c3213c0b-2359-4141-bf73-1afc1d8f9952"), "Complete 1500 tasks to reach this achievement!", 3, "1500 TASKS COMPLETED" },
                    { new Guid("d2370dcf-1b01-4d71-86b6-5516473f16bd"), "Complete 100 goals to reach this achievement!", 4, "100 GOALS COMPLETED" },
                    { new Guid("c8d8d7a5-ea1c-4ec4-ba52-bf2fb6ccfd1e"), "Complete 350 goals to reach this achievement!", 5, "350 GOALS COMPLETED" },
                    { new Guid("5a5779f5-bad9-4523-bf0e-949034a2c597"), "Complete 700 goals to reach this achievement!", 6, "700 GOALS COMPLETED" },
                    { new Guid("3a6122ce-08c6-495b-928b-c813823cf9e9"), "Complete 1000 goals to reach this achievement!", 7, "1000 GOALS COMPLETED" },
                    { new Guid("9b81dd62-3a1f-4ff3-8880-8668b377e534"), "Complete 150 important goals to reach this achievement!", 8, "150 IMPORTANT GOALS COMPLETED" },
                    { new Guid("f6d50309-804e-411f-baa8-6a0868d4a6c9"), "Earn 1000 minutes of progress to reach this achievement!", 9, "1000 MINUTES OF PROGRESS" },
                    { new Guid("bbcc7ce7-c474-4769-9119-928dd4e81c88"), "Complete 250 important goals to reach this achievement!", 10, "250 IMPORTANT GOALS COMPLETED" },
                    { new Guid("f81cd53b-584e-4446-abe9-2dda3bb1ef3a"), "Earn 1500 minutes of progress to reach this achievement!", 11, "1500 MINUTES OF PROGRESS" }
                });

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "Id", "Username" },
                values: new object[] { new Guid("c20a1ddf-31ca-4c2d-97f7-9a7871315120"), "Robert" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("3a6122ce-08c6-495b-928b-c813823cf9e9"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("46b08ff1-6204-4dc6-a558-e647f5e7ead3"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("5a5779f5-bad9-4523-bf0e-949034a2c597"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("82b05f85-3b05-48bd-8b30-2b8ebc4260c3"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("9b81dd62-3a1f-4ff3-8880-8668b377e534"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("bbcc7ce7-c474-4769-9119-928dd4e81c88"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("c3213c0b-2359-4141-bf73-1afc1d8f9952"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("c8d8d7a5-ea1c-4ec4-ba52-bf2fb6ccfd1e"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("d2370dcf-1b01-4d71-86b6-5516473f16bd"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("f4924d90-e5f7-4bd3-9156-10c11a5f1813"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("f6d50309-804e-411f-baa8-6a0868d4a6c9"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("f81cd53b-584e-4446-abe9-2dda3bb1ef3a"));

            migrationBuilder.DeleteData(
                table: "User",
                keyColumn: "Id",
                keyValue: new Guid("c20a1ddf-31ca-4c2d-97f7-9a7871315120"));

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
    }
}
