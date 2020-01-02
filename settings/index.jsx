registerSettingsPage(() => {
  return (
    <Page>
      <Section
        title="Top and bottom command username"
        description="Will appear as user@localhost"
      >
        <TextInput
          label="Username"
          placeholder="user"
          settingsKey="username"
        />
      </Section>

      <Section
        title="Top and bottom command localhost"
        description="Will appear as user@localhost"
      >
        <TextInput
          label="Localhost"
          placeholder="localhost"
          settingsKey="localhost"
        />
      </Section>
    </Page>
  );
});
