'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const PREFERENCES = [
  { id: 'weekly-digest', label: 'Weekly progress digest', defaultChecked: true },
  { id: 'interview-reminders', label: 'Interview reminders', defaultChecked: true },
  { id: 'job-matches', label: 'New job match alerts', defaultChecked: false },
]

type SettingsDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-5 rounded-2xl p-6 shadow-[var(--shadow-lift)] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg">Settings</DialogTitle>
          <DialogDescription>Update your profile and notification preferences.</DialogDescription>
        </DialogHeader>

        <form
          id="settings-form"
          className="grid gap-5"
          onSubmit={(event) => {
            event.preventDefault()
            onOpenChange(false)
            toast.success('Settings saved')
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="settings-name">Name</Label>
              <Input id="settings-name" defaultValue="Alex Rivera" className="h-10" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="settings-role">Target role</Label>
              <Input id="settings-role" defaultValue="Senior Frontend" className="h-10" />
            </div>
          </div>
          <div className="grid gap-3 rounded-xl border border-border bg-surface/60 p-4">
            {PREFERENCES.map((pref) => (
              <div key={pref.id} className="flex items-center justify-between gap-4">
                <Label htmlFor={pref.id} className="font-normal">
                  {pref.label}
                </Label>
                <Switch id={pref.id} defaultChecked={pref.defaultChecked} />
              </div>
            ))}
          </div>
        </form>

        <DialogFooter className="-mx-6 -mb-6 rounded-b-2xl px-6">
          <DialogClose render={<Button variant="soft" size="lg" />}>Cancel</DialogClose>
          <Button type="submit" form="settings-form" variant="shine" size="lg">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
