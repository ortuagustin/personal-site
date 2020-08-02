<template>
  <div class="flex items-center justify-center pb-20">
    <div class="container mx-auto shadow-xl">
      <div class="flex shadow">
        <div class="w-3/4 bg-white">
          <div class="p-16 space-y-10">
            <div class="space-y-6">
              <p class="inline-flex items-center space-x-4">
                <span class="rounded-full bg-cool-gray-700 px-1.5 pt-1.5 pb-2">
                  <BriefcaseIcon class="w-8 h-8 text-white" />
                </span>

                <span class="text-xl font-bold tracking-wider uppercase">
                  Experiencia
                </span>
              </p>

              <Experience class="-mx-2.5" />
            </div>

            <div class="space-y-6">
              <p class="inline-flex items-center w-full space-x-4">
                <span class="rounded-full bg-cool-gray-700 px-1.5 pt-1.5 pb-2">
                  <DocumentDuplicateIcon class="w-8 h-8 text-white" />
                </span>

                <span class="text-xl font-bold tracking-wider uppercase">
                  Publicaciones y proyectos
                </span>
              </p>

              <div class="space-y-4 divide-y-2 divide-cool-gray-100">
                <Publications />
              </div>
            </div>

            <div class="space-y-6">
              <p class="inline-flex items-center w-full space-x-4">
                <span class="rounded-full bg-cool-gray-700 px-1.5 pt-1.5 pb-2">
                  <TerminalIcon class="w-8 h-8 text-white" />
                </span>

                <span class="text-xl font-bold tracking-wider uppercase">
                  Aptitudes y conocimientos
                </span>
              </p>

              <div class="space-y-4 divide-y-2 divide-cool-gray-100">
                <Skills />
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/4 pb-12 bg-cool-gray-600">
          <div class="p-4 space-y-4 bg-cool-gray-800">
            <div class="items-center justify-center hidden space-x-2">
              <button
                class="px-2 py-1 text-white bg-gray-900 border border-gray-600 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray"
                type="button"
              >
                English
              </button>

              <button
                class="px-2 py-1 text-white bg-gray-900 border border-gray-600 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray"
                type="button"
              >
                Descargar
              </button>
            </div>

            <div>
              <img
                class="mx-auto border-4 border-gray-200 rounded-full"
                :src="require('../src/assets/images/profile.png')"
                alt="Agustín Salvador Ortu"
              />
            </div>

            <div class="text-center">
              <span class="text-2xl font-bold text-white">Agustín Salvador Ortu</span>
            </div>
          </div>

          <div class="px-6 pt-1 pb-6 space-y-6">
            <div class="pb-4 mt-2 border-b">
              <Contact class="space-y-2" />
            </div>

            <div class="space-y-4">
              <p class="text-base font-bold leading-5 tracking-wider text-white uppercase">
                Educación
              </p>

              <Education class="space-y-6" />
            </div>

            <div class="pb-4 space-y-4 border-b">
              <p class="text-base font-bold leading-5 tracking-wider text-white uppercase">
                Idiomas
              </p>

              <Languages class="space-y-1" />
            </div>

            <div class="space-y-4">
              <p class="text-base font-bold leading-5 tracking-wider text-white uppercase">
                Intereses
              </p>

              <Interests class="space-y-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export const data = {
  layout: 'page',
}

const DpsitExperienceItem = {
  props: {
    charge: { type: String, required: true },
    timeSpan: { type: String, required: true },
  },

  render() {
    return (
      <div class="flex flex-col py-4 space-y-1">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="object-cover w-16 h-16 mr-2"
              src={require('../src/assets/logos/logo-gba.png')}
            />
            <div class="flex flex-col">
              <span class="font-bold text-cool-gray-900">{this.charge}</span>
              <span class="inline-flex items-center space-x-1 text-sm font-medium leading-5 text-blue-800">
                <a
                  title="Visitar el sitio del Gobierno de la Pronvincia de Buenos Aires"
                  href="https://www.gba.gob.ar/"
                  target="_blank"
                >
                  <span class="transition duration-150 ease-in-out border-b-2 border-transparent hover:border-blue-800">
                    Dirección Provincial de Sistemas de Información y Tecnologías (DPSIT)
                  </span>
                </a>
                <ExternalLinkIcon class="w-5 h-5" />
              </span>
            </div>
          </div>

          <div>
            <span class="self-end text-sm font-semibold leading-5 text-cool-gray-500">
              {this.timeSpan}
            </span>
          </div>
        </div>
      </div>
    )
  },
}

const UniversityExperienceItem = {
  props: {
    charge: { type: String, required: true },
    timeSpan: { type: String, required: true },
  },

  render() {
    return (
      <div class="flex flex-col py-4 space-y-1">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="object-cover w-16 h-16 mr-2 rounded-full"
              src={require('../src/assets/logos/logo-info.jpg')}
            />
            <div class="flex flex-col">
              <span class="font-bold text-cool-gray-900">{this.charge}</span>
              <span class="inline-flex items-center space-x-1 text-sm font-medium leading-5 text-blue-800">
                <a
                  title="Visitar el sitio de la Facultad de Informática"
                  href="https://info.unlp.edu.ar/"
                  target="_blank"
                >
                  <span class="transition duration-150 ease-in-out border-b-2 border-transparent hover:border-blue-800">
                    Universidad Nacional de La Plata (UNLP) - Facultad de Informática
                  </span>
                </a>
                <ExternalLinkIcon class="w-5 h-5" />
              </span>
            </div>
          </div>

          <div>
            <span class="self-end text-sm font-semibold leading-5 text-cool-gray-500">
              {this.timeSpan}
            </span>
          </div>
        </div>

        <div class="pt-2">{this.$slots.default}</div>
      </div>
    )
  },
}

const Experience = {
  render() {
    return (
      <div class="divide-y-2 divide-cool-gray-100">
        <div class="flex flex-col pb-4 space-y-1">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <img
                class="object-cover w-16 h-16 mr-2"
                src={require('../src/assets/logos/logo-colescba.png')}
              />
              <div class="flex flex-col">
                <span class="font-bold text-cool-gray-900">Desarrollador</span>
                <span class="inline-flex items-center space-x-1 text-sm font-medium leading-5 text-blue-800">
                  <a
                    title="Visitar el sitio del Colegio de Escribanos de la Provincia de Buenos Aires"
                    href="https://www.colescba.org.ar/"
                    target="_blank"
                  >
                    <span class="transition duration-150 ease-in-out border-b-2 border-transparent hover:border-blue-800">
                      Colegio de Escribanos de la Provincia de Buenos Aires
                    </span>
                  </a>
                  <ExternalLinkIcon class="w-5 h-5" />
                </span>
              </div>
            </div>

            <div>
              <span class="self-end text-sm font-semibold leading-5 text-cool-gray-500">
                2020 - Presente
              </span>
            </div>
          </div>
        </div>

        <DpsitExperienceItem
          charge="Desarrollador Semi Senior - Área Arquitectura"
          timeSpan="2019 - Presente"
        />

        <UniversityExperienceItem charge="Ayudante diplomado" timeSpan="2019 - Presente">
          <div class="space-y-4">
            <div class="text-cool-gray-600">
              Ayudante diplomado en las asignaturas
              <span class="ml-1 font-semibold">Orientación a Objetos 1</span> y
              <span class="ml-1 font-semibold">Orientación a Objetos 2</span>
            </div>
          </div>
        </UniversityExperienceItem>

        <UniversityExperienceItem charge="Colaborador" timeSpan="2019">
          <div class="text-cool-gray-600">
            Colaborador en la asignatura
            <span class="ml-1 font-semibold">
              Enfoques de Desarrollo de Aplicaciones Móviles Multiplataforma
            </span>
          </div>
        </UniversityExperienceItem>

        <UniversityExperienceItem charge="Pasante I+D" timeSpan="2019">
          <div class="text-cool-gray-600">
            <ul class="ml-4">
              <li>&bull; Desarrollo de aplicaciones web</li>
              <li>&bull; Desarrollo de aplicaciones multiplataforma</li>
              <li>
                &bull; Investigación en enfoques de desarrollo de aplicaciones móviles
                multiplataforma
              </li>
            </ul>
          </div>
        </UniversityExperienceItem>

        <DpsitExperienceItem
          charge="Desarrollador Junior - Área Arquitectura"
          timeSpan="2018 - 2019"
        />

        <UniversityExperienceItem charge="Ayudante adscripto" timeSpan="2018 - 2019">
          <div class="space-y-4">
            <div class="text-cool-gray-600">
              Ayudante adscripto en las asignaturas
              <span class="ml-1 font-semibold">Orientación a Objetos 1</span> y
              <span class="ml-1 font-semibold">Orientación a Objetos 2</span>
            </div>
          </div>
        </UniversityExperienceItem>

        <UniversityExperienceItem charge="Colaborador" timeSpan="2018 - 2019">
          <div class="space-y-4">
            <div class="text-cool-gray-600">
              Colaborador en las asignaturas
              <span class="ml-1 font-semibold">Orientación a Objetos 1</span> y
              <span class="ml-1 font-semibold">Orientación a Objetos 2</span>
            </div>
          </div>
        </UniversityExperienceItem>
      </div>
    )
  },
}

const Publications = {
  render() {
    return (
      <article>
        <div class="flex items-center justify-between">
          <div>
            <p class="font-bold text-cool-gray-800">
              PWA para unificar el desarrollo de aplicaciones
            </p>
          </div>

          <div>
            <span class="font-bold tracking-wide uppercase">
              <span>CACIC</span>
              <span class="text-orange-500">2019</span>
            </span>
          </div>
        </div>

        <span class="mt-1 text-sm italic leading-5 text-cool-gray-500">
          Verónica Aguirre, Agustín Ortu, Lisandro Delia, Pablo Thomas, Leonardo Corbalán, Germán
          Cáseres, Patricia Pesado
        </span>
      </article>
    )
  },
}

const Skills = {
  render() {
    const percentageClasses = {
      8: 'w-1/12',
      16: 'w-1/6',
      20: 'w-1/5',
      25: 'w-1/4',
      33: 'w-1/3',
      40: 'w-2/5',
      50: 'w-1/2',
      58: 'w-7/12',
      60: 'w-3/5',
      66: 'w-2/3',
      75: 'w-3/4',
      80: 'w-4/5',
      83: 'w-5/6',
      91: 'w-11/12',
    }

    const skills = [
      { name: 'Spring', percentage: '16' },
      { name: 'Tailwindcss', percentage: '58' },
      { name: 'Gitlab', percentage: '16' },
      { name: 'Gitlab CI/CD', percentage: '8' },
      { name: 'Jenkins', percentage: '8' },
      { name: 'Symfony', percentage: '75' },
      { name: 'Vue', percentage: '75' },
      { name: 'Laravel', percentage: '50' },
      { name: 'Delphi', percentage: '40' },
      { name: 'Ruby on Rails', percentage: '33' },
      { name: 'Ionic', percentage: '33' },
      { name: 'Docker', percentage: '40' },
      { name: 'Angular', percentage: '25' },
      { name: 'Keras', percentage: '8' },
      { name: 'scikit-learn', percentage: '8' },
    ].sort((a, b) => b.percentage - a.percentage)

    return (
      <div class="flex flex-col pr-20 space-y-2.5 text-sm font-bold leading-5 text-cool-gray-500">
        {skills.map(skill => {
          return (
            <div class="flex items-center">
              <div class="flex-shrink w-1/5">{skill.name}</div>
              <div class="flex-grow flex-shrink-0 p-3 bg-cool-gray-100">
                <div
                  class={`${percentageClasses[skill.percentage]} p-3 -m-3 bg-cool-gray-500`}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    )
  },
}

const Education = {
  render() {
    return (
      <ul>
        <li>
          <p class="text-sm font-semibold leading-7 text-white">
            Magister en Ingeniería de Software
          </p>
          <p class="text-xs leading-6 text-gray-300">Facultad de Informática - UNLP</p>
          <p class="text-xs font-black leading-6 tracking-wide text-gray-300">2018 - Presente</p>
        </li>

        <li>
          <p class="text-sm font-semibold leading-7 text-white">Licenciatura en Sistemas</p>
          <p class="text-xs leading-6 text-gray-300">Facultad de Informática - UNLP</p>
          <p class="text-xs font-black leading-6 tracking-wide text-gray-300">2014 - Presente</p>
        </li>

        <li>
          <p class="text-sm font-semibold leading-7 text-white">
            Analista Programador Universitario
          </p>
          <p class="text-xs leading-6 text-gray-300">Facultad de Informática - UNLP</p>
          <p class="text-xs font-black leading-6 tracking-wide text-gray-300">2011 - 2014</p>
        </li>
      </ul>
    )
  },
}

const Interests = {
  render() {
    return (
      <ul>
        <li class="text-sm leading-7 text-white">Machine Learning</li>
        <li class="text-sm leading-7 text-white">Deep Learning</li>
        <li class="text-sm leading-7 text-white">Ingeniería de Software</li>
        <li class="text-sm leading-7 text-white">Desarrollo de aplicaciones multiplataforma</li>
        <li class="text-sm leading-7 text-white">Desarrollo de aplicaciones web</li>
        <li class="text-sm leading-7 text-white">Arquitectura de Software</li>
        <li class="text-sm leading-7 text-white">DevOps</li>
        <li class="text-sm leading-7 text-white">Internet de las Cosas</li>
        <li class="text-sm leading-7 text-white">Educación</li>
      </ul>
    )
  },
}

const Languages = {
  render() {
    return (
      <ul>
        <li class="text-sm leading-5 text-white">Español</li>
        <li class="text-sm leading-5 text-white">Inglés</li>
      </ul>
    )
  },
}

const Contact = {
  render() {
    return (
      <ul class="text-sm font-semibold leading-5 text-white">
        <li>
          <span class="inline-flex items-center space-x-4">
            <MailIcon class="w-6 h-6 text-white" />
            <a
              class="inline-block transition duration-150 ease-in-out border-b border-transparent hover:border-white"
              href="#"
            >
              ortu.agustin@gmail.com
            </a>
          </span>
        </li>

        <li>
          <span class="inline-flex items-center space-x-4">
            <GithubIcon class="w-6 h-6 text-white" />
            <a
              class="inline-block transition duration-150 ease-in-out border-b border-transparent hover:border-white"
              href="https://github.com/ortuagustin"
            >
              ortuagustin
            </a>
          </span>
        </li>

        <li>
          <span class="inline-flex items-center space-x-4">
            <TelegramIcon class="w-6 h-6 text-white" />
            <a
              class="inline-block transition duration-150 ease-in-out border-b border-transparent hover:border-white"
              href="#"
            >
              AgustinOrtu
            </a>
          </span>
        </li>

        <li>
          <span class="inline-flex items-center space-x-4">
            <UserCircleIcon class="w-6 h-6 text-white" />
            <a
              class="inline-block transition duration-150 ease-in-out border-b border-transparent hover:border-white"
              href="#"
            >
              Curriculum Vitae
            </a>
          </span>
        </li>
      </ul>
    )
  },
}

import ExternalLinkIcon from 'heroicons/solid/external-link.svg'
import TerminalIcon from 'heroicons/solid/terminal.svg'
import BriefcaseIcon from 'heroicons/solid/briefcase.svg'
import MailIcon from 'heroicons/solid/mail.svg'
import DocumentDuplicateIcon from 'heroicons/solid/document-duplicate.svg'
import UserCircleIcon from 'heroicons/solid/user-circle.svg'

import GithubIcon from '../src/assets/icons/github.svg'
import TelegramIcon from '../src/assets/icons/telegram.svg'

export default {
  components: {
    /* eslint-disable vue/no-unused-components */
    ExternalLinkIcon,
    TerminalIcon,
    BriefcaseIcon,
    DocumentDuplicateIcon,
    MailIcon,
    UserCircleIcon,

    GithubIcon,
    TelegramIcon,
    /* eslint-enable vue/no-unused-components */

    Experience,
    Publications,
    Skills,
    Education,
    Interests,
    Languages,
    Contact,
  },
}
</script>
