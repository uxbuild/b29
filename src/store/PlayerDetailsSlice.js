import api from "./api";

const playerDetailsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlayer: builder.query({
      query: (id) => ({
        url: `/players/${id}`,
        method: "GET",
      }),
      providesTags: ["Puppy"],
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Puppy"],
    }),
  }),
});

export const { useGetPlayerQuery, useDeletePlayerMutation } = playerDetailsApi
