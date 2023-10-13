
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await fetch("https://elevien-fe-job.free.beeceptor.com/applications");
  const users = await response.json();

  return users;
});


export const postUser = createAsyncThunk(
  "post/postUser",
  async ({ firstName, lastName, country, programName, categoryName, date, teamName, phone }) => {
    const response = await fetch(`https://elevien-fe-job.free.beeceptor.com/application`, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        country,
        programName,
        categoryName,
        date,
        teamName,
        phone
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Post successful!");
    } else {
      console.log("Post failed!");
    }

    const post = await response.json();
    return post;
  }
);
