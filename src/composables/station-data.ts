import { useRequest } from 'vue-request'
import { type StationData, dataApi } from '@/api/data'

const useStationData = createGlobalState(() => {
  const state = useRequest(dataApi.eStation, {
    initialData: {} as StationData,
  })

  return state
})

export { useStationData }
