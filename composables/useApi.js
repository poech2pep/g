export const useApi = (url, otp) => {
  return useFetch(url, {
    headers: {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTM1NThjM2EyOGRkNWI2ODU2MmFmZWJlMTc2YjkyZSIsInN1YiI6IjY0NjVlM2UwZDE4NTcyMDEyMDdmOGY1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BTBmJSXvdZakHMSW6A5mbQCX9EJtDkVd31Ih9fR6i0Y'
      , accept: 'application/json'
    }
  })
}