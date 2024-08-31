function Menu(e) {
  const list = document.querySelector('main')
  const Moon = document.querySelector('#moon')
  const button = document.querySelector('#Button')
  const npm = document.querySelector('#npm')
  const Figma = document.querySelector('#Figma')
  const value = document.querySelector('#value')
  const Border = document.getElementById('Border')
  const secondBorder = document.getElementById('secondBorder')
  //
  if (e.name === 'moon') {
    e.name = 'sunny'
    list.classList.add('bg-neutral-800', 'text-[white]')
    Moon.classList.add('text-black')
    button.classList.add('bg-green-800', 'text-[white]')
    npm.classList.add('bg-neutral-700', 'shadow-lg')
    Figma.classList.add(
      'border-[1px]',
      'border-white',
      'hover:bg-white',
      'hover:text-black',
      'hover:shadow-2xl'
    )
    value.classList.add('bg-neutral-700', 'shadow-lg')
    Border.classList.add('border-[1px]', 'border-neutral-500')
    secondBorder.classList.add('border-[1px]', 'border-neutral-500')
  } else {
    e.name = 'moon'
    list.classList.remove('bg-neutral-800', 'text-[white]')
    Moon.classList.remove('text-black')
    button.classList.remove('bg-green-800', 'text-[white]')
    npm.classList.remove('bg-neutral-700', 'shadow-lg')
    Figma.classList.remove(
      'border-[1px]',
      'border-white',
      'hover:bg-white',
      'hover:text-black',
      'hover:shadow-2xl'
    )
    value.classList.remove('bg-neutral-700', 'shadow-lg')
    Border.classList.remove('border-[1px]', 'border-neutral-500')
    secondBorder.classList.remove('border-[1px]', 'border-neutral-500')
  }
}

//

function MenuPhone(a) {
  const click = document.querySelector('#Nav')
  const bootstrap = document.getElementById('bootstrap')
  const Menu = document.getElementById('Menu')
  if (a.name === 'menu') {
    a.name = 'close'
    click.classList.add('opacity-[100]', 'bg-[#2a4fcb]', 'z-50')
    Menu.classList.add(
      'border-[2px]',
      'rounded-[50%]',
      'p-[5px]',
      'w-[10vw]',
      'h-[10vw]',
      'items-center',
      'justify-center',
      'flex',
      'border-[white]'
    )
    bootstrap.classList.add('opacity-0')
  } else {
    a.name = 'menu'
    click.classList.remove('opacity-[100]', 'bg-[#2a4fcb]', 'z-50')
    Menu.classList.remove(
      'border-[2px]',
      'rounded-[50%]',
      'p-[5px]',
      'w-[10vw]',
      'h-[10vw]',
      'items-center',
      'justify-center',
      'flex',
      'border-[white]'
    )
    bootstrap.classList.remove('opacity-0')
  }
}

function Sunny(event) {
  const diversed = document.querySelector('#Main-phone')
  const ButtonPhone = document.querySelector('#ButtonPhone')
  const npmPhone = document.querySelector('#npmPhone')
  const FigmaPhone = document.querySelector('#FigmaPhone')
  const valuePhone = document.getElementById('valuePhone')
  const BorderPhone = document.getElementById('BorderPhone')
  const secondBorderPhone = document.getElementById('secondBorderPhone')
  const bright = document.querySelector('#bright')

  if (event.name === 'sunny') {
    event.name = 'moon'
    bright.classList.add('text-black')
    diversed.classList.add('bg-neutral-800', 'text-[white]')
    ButtonPhone.classList.add('bg-green-800', 'text-[white]')
    npmPhone.classList.add('bg-neutral-700', 'shadow-lg')
    FigmaPhone.classList.add(
      'border-[1px]',
      'border-[#fff]',
      'hover:bg-[#fff]',
      'hover:text-[black]'
      // 'hover:shadow-2xl'
    )
    valuePhone.classList.add('bg-[#404040]', 'shadow-lg')
    BorderPhone.classList.add('border-[1px]', 'border-neutral-500')
    secondBorderPhone.classList.add('border-[1px]', 'border-neutral-500')
  } else {
    event.name = 'sunny'
    bright.classList.remove('text-black')
    diversed.classList.remove('bg-neutral-800', 'text-[white]')
    ButtonPhone.classList.remove('bg-green-800', 'text-[white]')
    npmPhone.classList.remove('bg-neutral-700', 'shadow-lg')
    FigmaPhone.classList.remove(
      'border-[1px] ',
      'border-[#fff]',
      'hover:bg-[#fff]',
      'hover:text-[black]'
      // 'hover:shadow-2xl'
    )
    valuePhone.classList.remove('bg-[#404040]', 'shadow-lg')
    BorderPhone.classList.remove('border-[1px]', 'border-neutral-500')
    secondBorderPhone.classList.remove('border-[1px]', 'border-neutral-500')
  }
}
