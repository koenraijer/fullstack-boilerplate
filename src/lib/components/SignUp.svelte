<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
    import { Label } from "$lib/components/ui/label";
    import { Input } from "$lib/components/ui/input";
    import SignInWithGoogle from "$lib/components/SignInWithGoogle.svelte";
  </script>
  
  <Card.Root class="w-full">
    <Card.Header>
      <Card.Title class="text-xl">Sign Up</Card.Title>
      <Card.Description>Enter your information to create an account</Card.Description>
    </Card.Header>
    <Card.Content>
      <div class="grid gap-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="grid gap-2">
            <Label for="first-name">First name</Label>
            <Input id="first-name" placeholder="Max" required />
          </div>
          <div class="grid gap-2">
            <Label for="last-name">Last name</Label>
            <Input id="last-name" placeholder="Robinson" required />
          </div>
        </div>
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button type="submit" class="w-full">Create an account</Button>
        <SignInWithGoogle goTo="/signup/username">Sign In With Google</SignInWithGoogle>
      </div>
      <div class="mt-4 text-center text-sm">
        Already have an account?
        <a href="/signin" class="underline"> Sign in </a>
      </div>
    </Card.Content>
  </Card.Root>
  