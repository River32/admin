import axios from '@/plugins/axios'

export function getVueRouters() {
  return axios.get('configs/vue-routers')
}

export function getConfigCategories(params = {}) {
  return axios.get('config-categories', { params })
}

export function storeConfigCategory(data) {
  return axios.post('config-categories', data)
}

export function destroyConfigCategory(id) {
  return axios.delete(`config-categories/${id}`)
}

export function updateConfigCategory(id, data) {
  return axios.put(`config-categories/${id}`, data)
}

export function getConfigs(params = {}) {
  return axios.get('configs', { params })
}

export function updateConfig(id, data) {
  return axios.put(`configs/${id}`, data)
}
