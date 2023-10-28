import React from 'react';
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from './HomepageComponents';

export default function GuidesSection({ title, className }) {
  return (
    <Section title={title} className={className}>
      <Card
        title="Dyte Embed"
        description="Embed a dyte meeting easily"
        to="/java"
      />
      <Card
        title="Integrating with Webhooks"
        description="Use webhooks to keep track of meeting events"
        to="/java"
      />
      <Card
        title="Recording your meetings"
        description="Record meetings easily and store in the cloud"
        to="/java"
      />

      <Card
        title="Livestreaming to other platforms"
        description="Livestream to platforms like YouTube, Twitch etc."
        to="/java"
      />
      <Card
        title="Livestreaming API Integration Guide"
        description="Livestream to HLS using REST APIs"
        to="/java"
      />
      <Card
        title="Livestreaming any RTMP input"
        description="Dyte allows livestreaming, via RTMP as well as HLS, for all Dyte meetings."
        to="/java"
      />
      <Card
        title="Controlling an Active Session"
        description="Control an active meeting with REST APIs"
        to="/java"
      />
      <Card
        title="Exporting Chat Dump"
        description="Programmatically retrieve all chat messages of a session using Chat Replay API."
        to="/java"
      />
    </Section>
  );
}
