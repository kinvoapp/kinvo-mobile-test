

export function isLoading(loading: boolean) {
  
  return { 
    type:'LOADING_DATA',
    payload: loading   
  }
}