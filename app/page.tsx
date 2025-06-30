"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Copy,
  Check,
  Sun,
  Moon,
  Shield,
  AlertTriangle,
  BookOpen,
  Users,
  Download,
  Calendar,
  Map,
  Menu,
  X,
  ExternalLink,
  Play,
  Maximize2,
  Minimize2,
} from "lucide-react"
import Image from "next/image"

// Discord Icon Component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

export default function MineshishLanding() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [copied, setCopied] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mapExpanded, setMapExpanded] = useState(false)
  const serverIP = "mineshish.online"

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "dark"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "video", "map", "worlds", "rules"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop - 150
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const copyServerIP = async () => {
    await navigator.clipboard.writeText(serverIP)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      let offsetTop = 0
      if (sectionId === "home") {
        offsetTop = 0
      } else if (sectionId === "rules") {
        // Для правил скроллим так, чтобы весь блок был виден - увеличиваем отступ
        offsetTop = element.offsetTop - -35
      } else {
        offsetTop = element.offsetTop - -35
      }
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }

  const navigationItems = [
    { id: "home", label: "Главная" },
    { id: "video", label: "Видео" },
    { id: "map", label: "Карта" },
    { id: "worlds", label: "Миры" },
    { id: "rules", label: "Правила" },
  ]

  const seasons = [
    {
      number: 1,
      startDate: "22 ноября 2021 г.",
      mapLink: null,
      status: "Завершён",
    },
    {
      number: 2,
      startDate: "27 июня 2022 г.",
      mapLink: "https://drive.google.com/file/d/1MEP2jj_hL3jX_kXOd9JTPUTcUtwd6A3E/view?usp=sharing",
      status: "Завершён",
    },
    {
      number: 3,
      startDate: "7 августа 2023 г.",
      mapLink: "https://drive.google.com/file/d/1H9rEiMhZESSxDSVWC10REAoo9U-EeXAS/view?usp=sharing",
      status: "Завершён",
    },
    {
      number: 4,
      startDate: "5 июля 2024 г.",
      mapLink: "https://drive.google.com/file/d/1cySLn5LADO7B6Cu9rr4w2zodzYnKAzYh/view?usp=sharing",
      status: "Завершён",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden relative select-none">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb orb-1 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-pink-300/20 dark:from-pink-400/20 dark:to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="floating-orb orb-2 w-80 h-80 bg-gradient-to-br from-green-200/40 to-emerald-300/20 dark:from-green-400/20 dark:to-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="floating-orb orb-3 w-72 h-72 bg-gradient-to-br from-yellow-200/40 to-amber-300/20 dark:from-yellow-400/20 dark:to-amber-500/10 rounded-full blur-3xl"></div>
        <div className="floating-orb orb-4 w-88 h-88 bg-gradient-to-br from-blue-200/40 to-purple-300/20 dark:from-blue-400/20 dark:to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="floating-orb orb-5 w-64 h-64 bg-gradient-to-br from-orange-200/40 to-red-300/20 dark:from-orange-400/20 dark:to-red-500/10 rounded-full blur-3xl"></div>
        <div className="floating-orb orb-6 w-56 h-56 bg-gradient-to-br from-cyan-200/40 to-teal-300/20 dark:from-cyan-400/20 dark:to-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Expanded Map Overlay */}
      {mapExpanded && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm">
          <div className="absolute inset-4 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Интерактивная карта сервера</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMapExpanded(false)}
                className="hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
            </div>
            <iframe
              src="http://89.35.130.15:25168/"
              className="w-full h-[calc(100%-60px)]"
              title="Mineshish Interactive Map"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Header with Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 select-none">
                <Image
                  src="/compass-logo.svg"
                  alt="Mineshish Logo"
                  width={32}
                  height={32}
                  className={`w-8 h-8 transition-all duration-300 ${theme === "light" ? "invert" : ""}`}
                />
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">Mineshish</div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-amber-600 dark:hover:text-amber-400 ${
                      activeSection === item.id
                        ? "text-amber-600 dark:text-amber-400"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 dark:bg-amber-400 rounded-full transition-all duration-300"></div>
                    )}
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="relative overflow-hidden bg-white/10 hover:bg-white/20 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-full w-10 h-10 p-0 shadow-lg hover:shadow-xl"
                >
                  <Sun
                    className={`absolute h-4 w-4 text-amber-500 transition-all duration-300 ${theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
                  />
                  <Moon
                    className={`absolute h-4 w-4 text-slate-400 transition-all duration-300 ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
                  />
                </Button>

                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden w-10 h-10 p-0"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 border-t border-slate-200/50 dark:border-slate-700/50">
                <div className="flex flex-col gap-2 mt-4">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 ${
                        activeSection === item.id
                          ? "text-amber-600 dark:text-amber-400 bg-slate-100 dark:bg-slate-800"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="text-center py-40 px-6 mt-20 min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-light text-slate-800 dark:text-slate-100 mb-8 leading-tight select-none">
              <span className="text-amber-600 dark:text-amber-400 font-medium">Mineshish</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 font-light select-none">
              За гранью приключений начинается дружба
            </p>
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200/30 dark:border-slate-700/30 max-w-md w-full">
                <div className="text-center mb-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 select-none">IP адрес сервера</p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3">
                    <code className="text-lg font-mono text-slate-800 dark:text-slate-200 select-none">{serverIP}</code>
                  </div>
                </div>
                <Button
                  size="lg"
                  onClick={copyServerIP}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      IP скопирован!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Скопировать IP
                    </>
                  )}
                </Button>
              </div>
              <Button
                size="lg"
                onClick={scrollToBottom}
                variant="outline"
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-2 border-amber-300 dark:border-amber-600 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Начать играть
              </Button>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section id="video" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-center text-slate-800 dark:text-slate-100 mb-16">
              Трейлер сезона
            </h2>
            <div className="flex justify-center">
              <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-slate-200/20 dark:border-slate-700/20 max-w-4xl w-full">
                <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/oeq18UP5JRs?si=wVcBDW6uHKeruHce"
                    title="Mineshish Server Showcase"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-center text-slate-800 dark:text-slate-100 mb-16">
              Карта сервера
            </h2>
            <div className="flex justify-center">
              <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-slate-200/20 dark:border-slate-700/20 max-w-4xl w-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Map className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">Интерактивная карта</h3>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMapExpanded(true)}
                    className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    <Maximize2 className="h-4 w-4" />
                    Развернуть
                  </Button>
                </div>
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="http://89.35.130.15:25168/"
                    className="w-full h-full"
                    title="Mineshish Interactive Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Worlds Download Section */}
        <section id="worlds" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-center text-slate-800 dark:text-slate-100 mb-16">
              Скачать миры
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {seasons.map((season) => (
                <div
                  key={season.number}
                  className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200/20 dark:border-slate-700/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                        Сезон {season.number}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">Начался {season.startDate}</span>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      {season.status}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {season.mapLink ? (
                      <Button
                        asChild
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <a href={season.mapLink} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                          Скачать карту
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    ) : (
                      <div className="w-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 py-3 rounded-xl text-center font-medium">
                        Карта недоступна
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section id="rules" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-center text-slate-800 dark:text-slate-100 mb-16">
              Правила сервера
            </h2>

            {/* Important Notice */}
            <div className="bg-amber-50/80 dark:bg-amber-900/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-amber-200/50 dark:border-amber-700/30 shadow-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">
                    Обязательно к ознакомлению
                  </h3>
                  <p className="text-amber-700 dark:text-amber-300 leading-relaxed">
                    Проект является SMP, вы имеете право строить что угодно (кроме свастик, бан-вордов), где угодно, без
                    спроса кого-либо. Максимум на своей территории, удалённой от спавна. Вы не можете строить там, где
                    располагаются игроки или территория занята.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Main Rules */}
              <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/20 dark:border-slate-700/20">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-red-500" />
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">Основные правила</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-red-500 font-bold text-lg">1.</span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong>Запрещён любой гриф</strong>, если это не является безобидной шуткой. Если вы вернули вещи
                      или восстановили постройку — это не наказывается.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-red-500 font-bold text-lg">2.</span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong>Запрещены любые виды читов</strong>: авто-фиш, fullbright, баритон. Быстрая постройка с
                      помощью Litematica разрешена.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-red-500 font-bold text-lg">3.</span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong>Запрещено использовать Replay Mod</strong> в своей выгоде (просмотр шахт, поиск структур).
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-red-500 font-bold text-lg">4.</span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong>Запрещены бан-ворды Twitch</strong>, если на сервере есть стример.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-red-500 font-bold text-lg">5.</span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong>Запрещено знать сид мира</strong> каким-либо способом.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-red-500 font-bold text-lg">6.</span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong>Запрещён любой дюп</strong>, дающий преимущество. Дюп ковров для арта разрешён, но излишки
                      должны быть уничтожены.
                    </p>
                  </div>
                </div>
              </div>

              {/* Special Cases */}
              <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/20 dark:border-slate-700/20">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-blue-500" />
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">Нюансы правил</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-blue-500 font-bold text-lg">•</span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Если вас загриферили, можете загриферить в ответ. Не доводите до абсурда.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-500 font-bold text-lg">•</span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Если вас разозлили и вы убили игрока, но вернули вещи — это не гриф.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-500 font-bold text-lg">•</span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      С безмерными токсиками можете делать что хотите, но не перегибайте палку.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-500 font-bold text-lg">•</span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Подписанные договоры (книги в Minecraft) должны выполняться. Смотрите, что подписываете!
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-slate-100/50 dark:bg-slate-700/30 rounded-xl border border-slate-200/30 dark:border-slate-600/30">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Важно помнить</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Стоит записать нарушение игрока, если админы не видели его.
                    <strong> Незнание правил не освобождает от ответственности.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-100 mb-8">
              Готов начать своё путешествие?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
              Присоединяйся к тысячам игроков в самом дружелюбном Minecraft SMP сообществе.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <a
                  href="https://discord.gg/94yWt6JS6x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <DiscordIcon className="w-6 h-6" />
                  Присоединиться к Discord
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 text-center text-slate-600 dark:text-slate-400">
          <div className="max-w-4xl mx-auto">
            <p className="mb-4">© 2021 Mineshish SMP.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
