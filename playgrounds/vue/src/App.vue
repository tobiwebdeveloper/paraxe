<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  Alert,
  Badge,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Choice,
  ChoiceGroup,
  Container,
  Dialog,
  Divider,
  Drawer,
  EmptyState,
  Eyebrow,
  FormField,
  Grid,
  Heading,
  Image,
  Input,
  Label,
  List,
  ListItem,
  Pagination,
  Popover,
  Progress,
  Radio,
  Section,
  SectionHeader,
  Select,
  Sidebar,
  SidebarGroup,
  SidebarItem,
  Skeleton,
  Stack,
  Switch,
  Tab,
  Table,
  Tabs,
  Tag,
  Text,
  Textarea,
  Toast,
  Tooltip,
} from "@paraxe/vue";
</script>

<template>
  <div class="playground">
    <Section class="playground-section">
      <Container>
        <Stack class="gap-8">
          <SectionHeader
            eyebrow="Paraxe"
            title="Component Playground"
            description="A live surface for testing the Paraxe component system."
          />

          <!-- Typography -->
          <Card>
            <Stack class="gap-6">
              <Heading level="h2">Typography</Heading>

              <Stack class="gap-4">
                <Eyebrow>Eyebrow</Eyebrow>
                <Heading level="h1">Heading 1</Heading>
                <Heading level="h2">Heading 2</Heading>
                <Heading level="h3">Heading 3</Heading>
                <Text>
                  This is standard body text rendered through the Paraxe
                  typography system.
                </Text>
                <Text class="text-secondary">
                  Secondary text demonstrates the semantic text hierarchy.
                </Text>
              </Stack>
            </Stack>
          </Card>

          <!-- Elements -->
          <Card>
            <Stack class="gap-6">
              <Heading level="h2">Elements</Heading>

              <div class="inline gap-3">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button>Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>

              <div class="inline gap-3">
                <Badge>Badge</Badge>
                <Tag>Tag</Tag>
              </div>

              <Divider />

              <ButtonGroup>
                <Button>Action One</Button>
                <Button>Action Two</Button>
              </ButtonGroup>
            </Stack>
          </Card>

          <!-- Forms -->
          <Card>
            <Stack class="gap-6">
              <Heading level="h2">Forms</Heading>

              <Grid class="grid-cols-2 gap-6">
           

                <Stack class="gap-3">
                  <Checkbox label="Checkbox" />
                  <Radio name="playground-radio" value="one" label="Radio One" />
                  <Radio name="playground-radio" value="two" label="Radio Two" />
                  <Switch label="Switch" />
                </Stack>
              </Grid>

              <ChoiceGroup>
                <Choice value="one">Choice One</Choice>
                <Choice value="two">Choice Two</Choice>
              </ChoiceGroup>
            </Stack>
          </Card>

          <!-- Data -->
          <Card>
            <Stack class="gap-6">
              <Heading level="h2">Data</Heading>

           

              <Progress :value="65" />

            

             
            </Stack>
          </Card>

          <!-- Feedback -->
          <Card>
            <Stack class="gap-6">
              <Heading level="h2">Feedback</Heading>

              <Alert>
                This is an informational alert.
              </Alert>

              <Skeleton />

              <EmptyState
                title="Nothing here yet"
                description="This is an empty state example."
              />
            </Stack>
          </Card>

          <!-- Navigation -->
          <Card>
            <Stack class="gap-6">
              <Heading level="h2">Navigation</Heading>

              <Breadcrumbs />

              <Tabs>
                <Tab value="one">Overview</Tab>
                <Tab value="two">Details</Tab>
                <Tab value="three">Settings</Tab>
              </Tabs>

              <Sidebar>
                <SidebarGroup>
                  <SidebarItem>Dashboard</SidebarItem>
                  <SidebarItem>Projects</SidebarItem>
                  <SidebarItem>Settings</SidebarItem>
                </SidebarGroup>
              </Sidebar>
            </Stack>
          </Card>

          <!-- Disclosure -->
          <Card>
            <Stack class="gap-6">
              <Heading level="h2">Disclosure & Overlays</Heading>


              <div class="inline gap-3">
                <Button>Dialog trigger</Button>
                <Button>Drawer trigger</Button>
                <Button>Popover trigger</Button>
                <Button>Tooltip trigger</Button>
              </div>

              <Dialog />
              <Drawer />
              <Popover />
              <Toast />
            </Stack>
          </Card>

          <!-- Media -->
          <Card>
            <Stack class="gap-6">
              <Heading level="h2">Media</Heading>

              <Image
                src="https://placehold.co/800x450"
                alt="Playground placeholder"
              />
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Section>
  </div>
</template>