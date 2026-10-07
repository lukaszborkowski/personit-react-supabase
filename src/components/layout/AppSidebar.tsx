import { NavLink, useLocation } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { nav } from '@/content/nav'
import { Logo } from './Logo'

export function AppSidebar() {
  const { pathname } = useLocation()
  const { setOpenMobile } = useSidebar()

  return (
    <Sidebar>
      <SidebarHeader className="px-4 pt-5 pb-3">
        <NavLink to="/" className="flex" onClick={() => setOpenMobile(false)}>
          <Logo className="h-9 w-auto self-start" />
        </NavLink>
      </SidebarHeader>

      <SidebarContent>
        {nav.filter((group) => group.pages.some((page) => !page.soon)).map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.pages.filter((page) => !page.soon).map((page) => (
                  <SidebarMenuItem key={page.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === page.path}
                      className="data-[active=true]:text-brand data-[active=true]:font-medium"
                    >
                      <NavLink to={page.path} onClick={() => setOpenMobile(false)}>
                        {page.title}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
