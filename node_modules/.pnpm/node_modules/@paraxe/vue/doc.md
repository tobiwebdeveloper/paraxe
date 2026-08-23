# Loba UI Vue

Loba UI Vue is the Vue implementation of the Loba Design System. It provides reusable application UI so projects can focus on product logic, data, and behaviour instead of rebuilding common interface patterns.

## Installation

Import the components you need from `@paraxe/vue`.

```ts
import {
  Button,
  Card,
  Stack,
  Grid,
  Table,
  Sidebar,
} from "@paraxe/vue";
```

Loba Design tokens and component styles must also be available to the project.

## Core Principle

Use Loba UI components for repeated UI responsibilities.

```text
Loba UI
→ components
→ behaviour
→ states
→ accessibility
→ design consistency

Application
→ data
→ business logic
→ routing
→ API calls
→ page-specific composition
```

Do not recreate a Loba component with custom HTML/CSS when the existing component already owns that responsibility.

## Layout

### Stack

Use `Stack` for vertical composition.

```vue
<Stack size="large" fullWidth>
  <Heading level="h1">Prospects</Heading>
  <Text>Manage your sales pipeline.</Text>
</Stack>
```

`Stack` is intentionally composition-focused. Avoid adding unnecessary page-level wrappers just to reproduce its spacing.

### Grid

Use `Grid` for structured columns.

```vue
<Grid columns="3" size="medium">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</Grid>
```

### Container

Use `Container` for page content boundaries.

```vue
<Section>
  <Container>
    ...
  </Container>
</Section>
```

## Card and Surfaces

`Card` is the standard bounded content container.

```vue
<Card>
  ...
</Card>
```

Card variants control containment and depth:

```vue
<Card variant="outlined">
  ...
</Card>

<Card variant="elevated">
  ...
</Card>
```

Surface classes modify the visual layer independently:

```vue
<Card class="surface-raised">
  ...
</Card>
```

The important distinction is:

```text
Card
→ container / border / radius / elevation / interaction

surface-*
→ background visual layer
```

Do not create a `<Surface>` wrapper around a Card.

## Forms

Loba UI provides:

```text
Input
Textarea
Select
FormField
Checkbox
Radio
Switch
ChoiceGroup
Choice
```

Use existing controls rather than recreating browser controls with application CSS.

`ChoiceGroup` is intended for prominent visual choices:

```vue
<ChoiceGroup
  v-model="projectType"
  class="choice-group--grid-2"
>
  <Choice value="renovation">
    Renovation
  </Choice>

  <Choice value="new-build">
    New build
  </Choice>
</ChoiceGroup>
```

## Data

Use the Data components for application records:

```text
List
ListItem
Table
Pagination
EmptyState
```

For example:

```vue
<Table
  :columns="columns"
  :rows="rows"
  sortable
  selectable
  multiple
/>
```

Let the component own its behaviour. Avoid wrapping a component in custom layout CSS when the component already provides that responsibility.

For example, Pagination should normally be used directly:

```vue
<Pagination
  :current-page="page"
  :total-items="totalItems"
  :page-size="pageSize"
  @update:current-page="page = $event"
/>
```

## Navigation

### Sidebar

Sidebar is the persistent application shell.

```text
Sidebar
├── header
├── navigation
│   ├── SidebarGroup
│   │   └── SidebarItem
│   └── ...
└── footer
```

Example:

```vue
<Sidebar :collapsed="collapsed">
  <template #header>
    ...
  </template>

  <SidebarGroup label="Workspace">
    <SidebarItem active href="/dashboard">
      Dashboard
    </SidebarItem>

    <SidebarItem>
      Sales

      <template #children>
        <SidebarItem href="/calls">
          Calls
        </SidebarItem>

        <SidebarItem href="/follow-ups">
          Follow-ups
        </SidebarItem>
      </template>
    </SidebarItem>
  </SidebarGroup>

  <template #footer>
    ...
  </template>
</Sidebar>
```

Sidebar is router-agnostic. The application controls navigation and active state.

### Tabs

Tabs switch between views of the same context.

```vue
<Tabs v-model="activeTab">
  <Tab value="overview">
    Overview
  </Tab>

  <Tab value="activity">
    Activity
  </Tab>

  <Tab value="documents">
    Documents
  </Tab>
</Tabs>
```

The application owns the content:

```vue
<Card v-if="activeTab === 'overview'">
  ...
</Card>

<Card v-else-if="activeTab === 'activity'">
  ...
</Card>
```

Loba UI does not provide a separate `TabPanel` component.

### Breadcrumbs

Breadcrumbs communicate hierarchical location.

```vue
<Breadcrumbs separator="›">
  <Breadcrumb href="/dashboard">
    Dashboard
  </Breadcrumb>

  <Breadcrumb href="/prospects">
    Prospects
  </Breadcrumb>

  <Breadcrumb current>
    James Wilson
  </Breadcrumb>
</Breadcrumbs>
```

## Overlays

Loba UI provides four overlay patterns:

```text
Dialog
→ focused task or decision

Drawer
→ larger contextual workspace

Popover
→ contextual interactive content

Tooltip
→ short non-interactive explanation
```

### Dialog

Use for focused tasks:

```vue
<Dialog v-model="showDialog">
  <Stack size="large">
    ...
  </Stack>
</Dialog>
```

### Drawer

Use for larger contextual workspaces:

```vue
<Drawer v-model="showDrawer">
  <Stack size="large">
    ...
  </Stack>
</Drawer>
```

### Popover

Use for interactive contextual UI:

```vue
<Popover>
  <template #trigger>
    <Button variant="secondary">
      Filters
    </Button>
  </template>

  ...
</Popover>
```

### Tooltip

Use for short explanations:

```vue
<Tooltip text="Delete prospect">
  <Button variant="ghost">
    Delete
  </Button>
</Tooltip>
```

## Feedback

Loba UI provides:

```text
Alert
→ persistent in-flow message

Progress
→ operation completion

Skeleton
→ loading placeholder

Toast
→ temporary floating notification
```

These should not overlap in purpose.

## Composition Rules

Prefer:

```vue
<Card class="surface-raised">
  <Stack size="large" fullWidth>
    <Heading level="h2">
      Pipeline
    </Heading>

    <Table ... />
  </Stack>
</Card>
```

over creating custom page-specific UI components for every repeated visual pattern.

Create a new component only when a pattern has a **real reusable responsibility**.

Avoid:

```text
ProspectCard
DashboardPanel
ToolbarWrapper
TableContainer
SectionBox
```

unless repeated application work proves that they deserve to exist.

## Custom CSS

Custom CSS is allowed.

Loba UI is not intended to prevent application-specific styling. It is intended to remove unnecessary repetition.

Use custom CSS for:

```text
page-specific layout
brand-specific compositions
unique visual treatments
application-specific responsive behaviour
```

Do not use custom CSS to recreate:

```text
buttons
cards
forms
tables
navigation
dialogs
drawers
feedback
```

when Loba UI already provides them.

## Design Tokens

Loba Design separates:

```text
tokens.css
→ structural values

themes/*.css
→ colours / semantic theme values

components.css
→ component implementation styles
```

Components should consume existing tokens instead of inventing duplicate values.

For example:

```css
background: var(--surface-raised);
border-color: var(--border-default);
color: var(--text-primary);
```

## Framework Responsibility

Loba UI Vue provides Vue-specific implementations.

The design language remains in Loba Design so the same system can eventually support other frameworks.

The Vue layer should therefore focus on:

```text
props
events
slots
state
Vue behaviour
```

while shared visual decisions remain in Loba Design.

## Building an Application

A typical Loba application can be structured around:

```text
App Shell
├── Sidebar
│
└── Main
    ├── Breadcrumbs
    ├── SectionHeader
    ├── Cards
    ├── Forms
    ├── Data
    ├── Tabs
    ├── Dialog / Drawer
    └── Feedback
```

The intended workflow is:

```text
Choose the Loba component
→ compose it
→ connect application state
→ add business logic
→ add custom CSS only when genuinely necessary
```

Loba UI exists to make application building faster without replacing the developer's understanding of HTML, CSS, JavaScript, Vue, or TypeScript.
