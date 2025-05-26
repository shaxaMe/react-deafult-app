import useApi from "@/api";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export default function useFetch<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    useApi(url, options)
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((error) => reject(error));
  });
}