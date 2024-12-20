import api from "./api";

const newPlayerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addPlayer: builder.mutation({
      query: (payload) => ({
        url: "/players",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Puppy"],
    }),
  }),
});

export const { useAddPlayerMutation } = newPlayerApi;