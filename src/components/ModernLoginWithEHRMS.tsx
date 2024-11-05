"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ModernLoginWithEHRMS() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [wbpidOrPhone, setWbpidOrPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [isOtpSent, setIsOtpSent] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email login logic here
    console.log("Email login attempt with:", { email, password })
  }

  const handleEHRMSSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isOtpSent) {
      // Handle OTP sending logic here
      console.log("Sending OTP to:", wbpidOrPhone)
      setIsOtpSent(true)
    } else {
      // Handle e-HRMS login logic here
      console.log("e-HRMS login attempt with:", { wbpidOrPhone, otp })
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/img/login.jpeg?height=1080&width=1920')"}}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <Card className="w-full max-w-md z-10">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="ehrms">e-HRMS</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <form onSubmit={handleEmailSubmit}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full" type="submit">Sign In</Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="ehrms">
              <form onSubmit={handleEHRMSSubmit}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="wbpidOrPhone">WBPID / Phone Number</Label>
                    <Input
                      id="wbpidOrPhone"
                      type="text"
                      placeholder="Enter WBPID or Phone Number"
                      value={wbpidOrPhone}
                      onChange={(e) => setWbpidOrPhone(e.target.value)}
                      required
                    />
                  </div>
                  {isOtpSent && (
                    <div className="grid gap-2">
                      <Label htmlFor="otp">OTP</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                      />
                    </div>
                  )}
                  <Button className="w-full" type="submit">
                    {isOtpSent ? "Verify OTP" : "Send OTP"}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 hidden sm:inline-block">Don&apos;t have an account?</span>
            <a 
              href="#" 
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Sign up
            </a>
          </div>
          <a 
            href="#" 
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Forgot password?
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}