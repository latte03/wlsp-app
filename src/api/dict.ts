import { agAxios } from '@/utils/request'

const commApi = {

  async getDict(key) {
    const res = await agAxios.get(`/application/app/dict/list/${key}`)

    return res.map((i) => {
      return {
        ...i,
        text: i.name,
        value: i.code,
      }
    })
  },

  async  uploadAsBase64(file) {
    const res = await agAxios.post<FileUpload>(
      '/base/file/base64',
      file,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    )

    return res
  },
}

export interface FileUpload {
  bizType: string
  fileType: string
  storageType: string
  bucket: string
  path: string
  url: string
  uniqueFileName: string
  fileMd5: null
  originalFileName: string
  contentType: string
  suffix: string
  size: string
  id: string
}

export { commApi }
