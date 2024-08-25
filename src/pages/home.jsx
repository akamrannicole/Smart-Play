import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpenIcon, BrainIcon, UsersIcon, RocketIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="#">
          <BookOpenIcon className="h-6 w-6" />
          <span className="sr-only">LearnQuest Logo</span>
          <span className="ml-2 text-lg font-bold">LearnQuest</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
            Login
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48"  style={{ backgroundImage: `url('https://img.freepik.com/free-psd/back-school-podium-background_23-2150590239.jpg?t=st=1724548062~exp=1724551662~hmac=7ff89331d63b2bdcf9fc9db5f4b2036174c9e18532587a9991317421e23c56fb&w=996)` }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Master Your Skills, One Quiz at a Time
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover a world of knowledge tailored to your interests and learning style. Start your journey today.
                </p>
              </div>
              <div className="space-x-4">

                <Link to="/onboarding">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose Smart Play?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <BrainIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Gamified Learning</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Gamified learning based on your interests and learning style.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <UsersIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Ai Tutor</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Learn from Ai through prompts.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <RocketIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Self-Paced Learning</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Progress at your own speed and on your own schedule.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <BookOpenIcon className="h-12 w-12 text-primary" />
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Explore a wide range of STEM subjects and skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Learning Journey?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of learners who are already expanding their horizons with LearnQuest.
                </p>
              </div>
              <Button size="lg">Sign Up Now</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 LearnQuest. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
