"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Script from "next/script"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
}

const GA_MEASUREMENT_ID = "G-C6PPMKB11Q"

export function CookieBanner() {
  const [showBanner, setShowBanner] = React.useState(false)
  const [showPreferences, setShowPreferences] = React.useState(false)
  const [preferences, setPreferences] = React.useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
  })
  const [consentGiven, setConsentGiven] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    // Check if user has already given consent
    const savedConsent = localStorage.getItem("cookie-consent")
    if (savedConsent) {
      const parsed = JSON.parse(savedConsent) as CookiePreferences
      setPreferences(parsed)
      setConsentGiven(true)
    } else {
      setShowBanner(true)
      setConsentGiven(false)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    setShowBanner(false)
    setConsentGiven(true)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setShowBanner(false)
    setConsentGiven(true)
  }

  return (
    <>
      {/* Google Analytics - Only load if consent given */}
      {consentGiven && preferences.analytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
          >
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl border border-border/50 bg-background/95 p-4 shadow-2xl backdrop-blur-md sm:p-6">
                {/* Header */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-12 sm:w-12">
                    <Cookie className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold sm:text-lg">
                      We value your privacy
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We use cookies to enhance your browsing experience and analyze our traffic.
                      Choose your preferences below.
                    </p>
                  </div>
                </div>

                {/* Preferences Panel */}
                <AnimatePresence>
                  {showPreferences && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-3 border-t border-border/50 pt-4">
                        {/* Necessary Cookies */}
                        <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                          <div>
                            <p className="text-sm font-medium">Necessary Cookies</p>
                            <p className="text-xs text-muted-foreground">
                              Required for the website to function properly
                            </p>
                          </div>
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={true}
                              disabled
                              className="h-5 w-9 cursor-not-allowed appearance-none rounded-full bg-primary transition-colors"
                            />
                            <span className="pointer-events-none absolute left-[18px] top-0.5 h-4 w-4 rounded-full bg-white shadow-sm" />
                          </div>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                          <div>
                            <p className="text-sm font-medium">Analytics Cookies</p>
                            <p className="text-xs text-muted-foreground">
                              Help us understand how visitors interact with our website
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              setPreferences((prev) => ({
                                ...prev,
                                analytics: !prev.analytics,
                              }))
                            }
                            className={`relative h-5 w-9 rounded-full transition-colors ${
                              preferences.analytics ? "bg-primary" : "bg-muted-foreground/30"
                            }`}
                          >
                            <span
                              className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
                                preferences.analytics ? "left-[18px]" : "left-0.5"
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    onClick={() => setShowPreferences(!showPreferences)}
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {showPreferences ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        Hide preferences
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        Customize preferences
                      </>
                    )}
                  </button>

                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-3">
                    {showPreferences && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSavePreferences}
                        className="text-sm"
                      >
                        Save Preferences
                      </Button>
                    )}
                    <Button size="sm" onClick={handleAcceptAll} className="text-sm">
                      Accept All
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
