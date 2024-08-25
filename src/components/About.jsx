import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpenIcon, GlobeIcon, UsersIcon, HeartIcon } from "lucide-react"
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('https://img.freepik.com/free-vector/3d-colourful-background-with-geometrical-shapes_52683-36241.jpg?t=st=1724546619~exp=1724550219~hmac=6f84b3ed8cc36abfb80cb0ff7992297d9eb7bfb4452984c80f5fda0cc7368d3b&w=800')] bg-cover">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About smartPlay
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Empowering learners worldwide through accessible, personalized education.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <GlobeIcon className="h-12 w-12 text-primary" />
                  <h2 className="text-xl font-bold">Our Mission</h2>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    To make quality education accessible to everyone, everywhere, by leveraging technology and
                    personalized learning experiences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <UsersIcon className="h-12 w-12 text-primary" />
                  <h2 className="text-xl font-bold">Our Community</h2>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Join a vibrant community of learners and educators from around the world, sharing knowledge and
                    inspiring growth.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <HeartIcon className="h-12 w-12 text-primary" />
                  <h2 className="text-xl font-bold">Our Values</h2>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    We believe in lifelong learning, inclusivity, innovation, and the transformative power of education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Story
            </h2>

            <div className="max-w-[800px] mx-auto space-y-6 text-gray-500 dark:text-gray-400">
              <p>
                Founded in 2020 by educators and technologists, smartPlay aims to make high-quality education accessible to all.
                Our adaptive platform meets each learner's unique needs, and we've grown into a global community of millions.
              </p>
              <p>
                We continuously enhance learning with the latest educational technology and cognitive science, offering courses
                in over 50 languages on topics from computer science to personal development. The future of learning starts here.
              </p>
            </div>

          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Join Our Journey
            </h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Whether you're here to learn, teach, or both, you're an important part of our mission to transform
                lives through learning. Ready to start your smartPlay adventure?
              </p>
              <Button size="lg">Get Started Today</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()}  smartPlay. All rights reserved.</p>
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