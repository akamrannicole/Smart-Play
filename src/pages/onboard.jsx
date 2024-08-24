
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CheckIcon, BookOpenIcon, BrainIcon, EyeIcon, EarIcon, HandIcon } from "lucide-react"

const steps = ["Essential Info", "Learning Goals", "Interests", "Learning Style", "Summary"]

export default function OnBoarding() {
  const [currentStep, setCurrentStep] = useState(0)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    location: "",
    learningGoals: "",
    interests: [],
    learningStyle: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleInterestToggle = (interest) => {
    setUserData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <CardDescription>Let's start with the basics</CardDescription>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={userData.name} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">EmaiL</Label>
                <Input id="email" name="email" type="email" value={userData.email} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" name="location" value={userData.location} onChange={handleInputChange} />
              </div>
            </div>
          </>
        )
      case 1:
        return (
          <>
            <CardDescription>What do you hope to achieve through online learning?</CardDescription>
            <div className="space-y-2">
              <Label htmlFor="learningGoals">Learning Goals</Label>
              <Textarea
                id="learningGoals"
                name="learningGoals"
                value={userData.learningGoals}
                onChange={handleInputChange}
                className="min-h-[100px]"
              />
            </div>
          </>
        )
      case 2:
        return (
          <>
            <CardDescription>What kind of topics are you interested in?</CardDescription>
            <div className="grid grid-cols-2 gap-4">
              {["Technology", "Science", "Arts", "Languages", "Business", "Health"].map((interest) => (
                <Button
                  key={interest}
                  variant={userData.interests.includes(interest) ? "default" : "outline"}
                  className="justify-start"
                  onClick={() => handleInterestToggle(interest)}
                >
                  <CheckIcon className={`mr-2 h-4 w-4 ${userData.interests.includes(interest) ? "" : "invisible"}`} />
                  {interest}
                </Button>
              ))}
            </div>
          </>
        )
      case 3:
        return (
          <>
            <CardDescription>How do you prefer to learn?</CardDescription>
            <RadioGroup
              name="learningStyle"
              value={userData.learningStyle}
              onValueChange={(value) => setUserData((prev) => ({ ...prev, learningStyle: value }))}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="visual" id="visual" />
                <Label htmlFor="visual" className="flex items-center">
                  <EyeIcon className="mr-2 h-4 w-4" />
                  Visual
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="auditory" id="auditory" />
                <Label htmlFor="auditory" className="flex items-center">
                  <EarIcon className="mr-2 h-4 w-4" />
                  Auditory
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hands-on" id="hands-on" />
                <Label htmlFor="hands-on" className="flex items-center">
                  <HandIcon className="mr-2 h-4 w-4" />
                  Hands-on
                </Label>
              </div>
            </RadioGroup>
          </>
        )
      case 4:
        return (
          <>
            <CardDescription>Great! Here's a summary of your profile:</CardDescription>
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {userData.name}
              </p>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              <p>
                <strong>Location:</strong> {userData.location}
              </p>
              <p>
                <strong>Learning Goals:</strong> {userData.learningGoals}
              </p>
              <p>
                <strong>Interests:</strong> {userData.interests.join(", ")}
              </p>
              <p>
                <strong>Learning Style:</strong> {userData.learningStyle}
              </p>
            </div>
          </>
        )
    }
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome to Your Learning Journey</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${index <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
            >
              {index < currentStep ? <CheckIcon className="h-4 w-4" /> : index + 1}
            </div>
          ))}
        </div>
        {renderStep()}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleBack} disabled={currentStep === 0} variant="outline">
          Back
        </Button>
        <Button onClick={handleNext} disabled={currentStep === steps.length - 1}>
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  )
}
