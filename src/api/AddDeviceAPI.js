// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
let body;
// Define our single API slice object
export const AddDeviceAPI = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'devices',
    tagTypes: ['devices'],
    // All of our requests will have URLs starting with '/fakeApi'
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
        // The `getPosts` endpoint is a "query" operation that returns data
        getDevices: builder.query({
            query: () => 'devices',
            providesTags: ['devices']
        }),
        addDevice: builder.mutation({
            query: (body) => {
                // console.log("Hardware Data");
                // console.log(body.get('hardware'));
                return {
                    url: '/add-device',
                    method: 'POST',
                    // headers:{'Content-Type':'multipart/form-data'},
                    body: body,
                };
            },
            invalidatesTags: ['devices'],
        }),
        deleteDevice: builder.mutation({
            query: (id) => ({
                url: `/delete-device/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['devices']
        }),
        updateDevice: builder.mutation({
            query: ({ id, body }) => ({
                url: `/update-device/${id}`,
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ['devices']
        }),
        findGetDevice: builder.query({
            query: (id) => ({
                url: `/find-device/${id}`,
            }),
            providesTags: ['devices']
        })
    })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useFindGetDeviceQuery, useAddDeviceMutation, useDeleteAccountMutation, useUpdateDeviceMutation, useGetDevicesQuery } = AddDeviceAPI



