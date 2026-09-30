'use client'

import Link from 'next/link'
import { Bell, LogOut, Menu, Settings, User } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { NAV_ITEMS, type SectionId } from './nav-items'

type TopbarProps = {
  onNavigate: (id: SectionId) => void
}

export function Topbar({ onNavigate }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="soft" size="icon-lg" aria-label="Open navigation" />}
            >
              <Menu aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                {NAV_ITEMS.map((item) => (
                  <DropdownMenuItem key={item.id} onClick={() => onNavigate(item.id)}>
                    <item.icon aria-hidden="true" />
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <BrandLogo />
        </div>

        <div className="hidden lg:block">
          <p className="text-sm text-muted-foreground">Wednesday, September 30</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon-lg" aria-label="Notifications" className="relative">
            <Bell className="transition-transform group-hover/button:rotate-12" aria-hidden="true" />
            <span className="absolute top-2 right-2 size-2 rounded-full bg-primary ring-2 ring-background" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="lg" className="gap-2.5 pr-2 pl-1.5" aria-label="Account menu" />
              }
            >
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-linear-to-br from-chart-2 to-primary text-xs font-semibold text-primary-foreground">
                AR
              </span>
              <span className="hidden text-sm font-medium sm:inline">Alex Rivera</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuGroup>
                <DropdownMenuLabel>alex@devmail.io</DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => onNavigate('settings')}>
                  <User aria-hidden="true" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('settings')}>
                  <Settings aria-hidden="true" />
                  Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem render={<Link href="/" />}>
                  <LogOut aria-hidden="true" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
