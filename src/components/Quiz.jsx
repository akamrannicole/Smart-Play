import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react"
import confetti from 'canvas-confetti'

const subjects = {
  technology: [
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Processor Unifier", "Central Process Utility"], answer: 0 },
    { question: "Which company developed the JavaScript programming language?", options: ["Microsoft", "Netscape", "Apple", "Google"], answer: 1 },
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], answer: 0 },
    { question: "Which of these is not a cloud computing service?", options: ["AWS", "Azure", "Google Cloud", "Oracle Database"], answer: 3 },
    { question: "What is the purpose of CSS in web development?", options: ["To create dynamic content", "To define the structure of a webpage", "To style the visual presentation of a webpage", "To handle server-side logic"], answer: 2 },
  ],
  science: [
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], answer: 0 },
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
    { question: "What is the largest organ in the human body?", options: ["Heart", "Brain", "Liver", "Skin"], answer: 3 },
    { question: "What is the process by which plants make their own food?", options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"], answer: 0 },
    { question: "What is the smallest unit of matter?", options: ["Atom", "Molecule", "Cell", "Electron"], answer: 0 },
  ],
  history: [
    { question: "In which year did World War II end?", options: ["1943", "1945", "1947", "1950"], answer: 1 },
    { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"], answer: 2 },
    { question: "Which ancient wonder was located in Alexandria?", options: ["Hanging Gardens", "Colossus", "Lighthouse", "Temple of Artemis"], answer: 2 },
    { question: "In which year did the Berlin Wall fall?", options: ["1987", "1989", "1991", "1993"], answer: 1 },
    { question: "Who wrote the 'I Have a Dream' speech?", options: ["Malcolm X", "Martin Luther King Jr.", "John F. Kennedy", "Rosa Parks"], answer: 1 },
  ],
}

export default function Quiz({ name }) {
  const [subject, setSubject] = useState("technology")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  useEffect(() => {
    if (timeLeft > 0 && !showScore) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !showScore) {
      handleAnswerClick(null)
    }
  }, [timeLeft, showScore])

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    if (answerIndex === subjects[subject][currentQuestion].answer) {
      setScore(score + 1)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < subjects[subject].length) {
      setCurrentQuestion(nextQuestion)
      setTimeLeft(15)
      setSelectedAnswer(null)
    } else {
      setShowScore(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setTimeLeft(15)
    setSelectedAnswer(null)
  }

  const handleSubjectChange = (value) => {
    setSubject(value)
    restartQuiz()
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">  {name && <h1>Hello {name} answer this simple quiz to get started</h1>}</CardTitle>
          <Select onValueChange={handleSubjectChange} value={subject}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="history">History</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          {showScore ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
              <p className="text-xl mb-4">You scored {score} out of {subjects[subject].length}</p>
              {score === subjects[subject].length && (
                <div className="text-green-500 flex items-center justify-center mb-4">
                  <CheckCircle2 className="mr-2" />
                  Perfect Score! You're a {subject} genius!
                </div>
              )}
              {score < subjects[subject].length / 2 && (
                <div className="text-yellow-500 flex items-center justify-center mb-4">
                  <AlertCircle className="mr-2" />
                  Keep practicing! You'll improve!
                </div>
              )}
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-4">Question {currentQuestion + 1}/{subjects[subject].length}</h2>
              <p className="mb-4">{subjects[subject][currentQuestion].question}</p>
              <div className="space-y-2">
                {subjects[subject][currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    className="w-full justify-start text-left"
                    variant={selectedAnswer === index ? (index === subjects[subject][currentQuestion].answer ? "default" : "destructive") : "outline"}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                    {selectedAnswer === index && (
                      index === subjects[subject][currentQuestion].answer ? (
                        <CheckCircle2 className="ml-auto h-4 w-4 text-green-500" />
                      ) : (
                        <XCircle className="ml-auto h-4 w-4 text-red-500" />
                      )
                    )}
                  </Button>
                ))}
              </div>
              <div className="mt-4">
                <Progress value={(timeLeft / 15) * 100} className="w-full" />
                <p className="text-center mt-2">Time left: {timeLeft} seconds</p>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter>
          {showScore && (
            <Button onClick={restartQuiz} className="w-full">
              Restart Quiz
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}