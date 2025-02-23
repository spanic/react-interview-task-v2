const debounce = <F extends (...args: any[]) => void>(
  fn: F,
  timeout: number,
) => {
  let timer: ReturnType<typeof setTimeout>

  return (...args: Parameters<F>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), timeout)
  }
}

export default debounce
