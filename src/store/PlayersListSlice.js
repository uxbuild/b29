import api from "./api";

const playersListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => ({
        url: "/players",
        method: "GET",
      }),
      providesTags: ["Puppy"],
    }),
  }),
});

export const { useGetPlayersQuery } = playersListApi;