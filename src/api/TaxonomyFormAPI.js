// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const TaxonomyFormAPI = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'taxonomy',
    tagTypes: ['taxonomy'],
    // All of our requests will have URLs starting with '/fakeApi'
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
        // The `getPosts` endpoint is a "query" operation that returns data
        getTransactionTypeTax: builder.query({
            query: () => 'taxonomy/transaction-type',
            providesTags: ['taxonomy']
        }),
        getYourRoleTax: builder.query({
            query: () => 'taxonomy/your-role',
            providesTags: ['taxonomy']
        }),
        getStatusConditionTax: builder.query({
            query: () => 'taxonomy/status-condition',
            providesTags: ['taxonomy']
        }),
        getYearOfManufactureTax: builder.query({
            query: () => 'taxonomy/year-of-manufacture',
            providesTags: ['taxonomy']
        }),
        getAvailabilityTax: builder.query({
            query: () => 'taxonomy/availability',
            providesTags: ['taxonomy']
        }),
        getUnitOfMeasureDeviceSpareTax: builder.query({
            query: () => 'taxonomy/unit-of-Measure-device-spare',
            providesTags: ['taxonomy']
        }),
        getShippingTax: builder.query({
            query: () => 'taxonomy/shipping',
            providesTags: ['taxonomy']
        }),
        getClinicalApplicationsTax: builder.query({
            query: () => 'taxonomy/clinical-applications',
            providesTags: ['taxonomy']
        }),
        getPurposeUseTax: builder.query({
            query: () => 'taxonomy/purpose-use',
            providesTags: ['taxonomy']
        }),
        getPhysicalLocationTax: builder.query({
            query: () => 'taxonomy/physical-location',
            providesTags: ['taxonomy']
        }),
        getWarrantyTax: builder.query({
            query: () => 'taxonomy/warranty',
            providesTags: ['taxonomy']
        }),
    })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const {useGetAvailabilityTaxQuery,useGetClinicalApplicationsTaxQuery,useGetPhysicalLocationTaxQuery,useGetPurposeUseTaxQuery,useGetShippingTaxQuery,useGetStatusConditionTaxQuery,useGetTransactionTypeTaxQuery,useGetUnitOfMeasureDeviceSpareTaxQuery,useGetWarrantyTaxQuery,useGetYearOfManufactureTaxQuery,useGetYourRoleTaxQuery} = TaxonomyFormAPI



