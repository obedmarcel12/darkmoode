function Menu(e) {
  const list = document.querySelector('main')
  const Moon = document.querySelector('#moon')
  const button = document.querySelector('#Button')
  const npm = document.querySelector('#npm')
  const Figma = document.querySelector('#Figma')
  const value = document.querySelector('#value')
  const Border = document.getElementById('Border')
  //
  if (e.name === 'moon') {
    e.name = 'close'
    list.classList.add('bg-neutral-800', 'text-[white]')
    Moon.classList.add('text-black')
    button.classList.add('bg-[#0a4045]', 'text-[white]')
    npm.classList.add('bg-neutral-700', 'shadow-lg')
    Figma.classList.add(
      'border-[1px]',
      'border-white',
      'hover:bg-white',
      'hover:text-black',
      'hover:shadow-2xl'
    )
    value.classList.add('bg-neutral-700', 'shadow-lg')
    Border.classList.add('border-[1px]', 'border-[blue]')
  } else {
    e.name = 'moon'
    list.classList.remove('bg-neutral-800', 'text-[white]')
    Moon.classList.remove('text-black')
    button.classList.remove('bg-[#0a4045]', 'text-[white]')
    npm.classList.remove('bg-neutral-700', 'shadow-lg')
    Figma.classList.remove(
      'border-[1px]',
      'border-white',
      'hover:bg-white',
      'hover:text-black',
      'hover:shadow-2xl'
    )
    value.classList.remove('bg-neutral-700', 'shadow-lg')
    Border.classList.remove('border-[1px]', 'border-[blue]')
  }
}
