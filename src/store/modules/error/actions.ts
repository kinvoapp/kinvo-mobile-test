export function gotError(err: boolean) {
  
  return { 
    type:'ERROR',
    payload: err
  }
}