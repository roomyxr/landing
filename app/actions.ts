'use server';

export async function addToWaitlist(email: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Discord Webhook URL не е поставен во .env фајлот.");
    return { success: false, error: "Server configuration error" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [
          {
            title: '🚀 Нова пријава на Roomy Waitlist!',
            color: 3447003,
            fields: [
              {
                name: 'Е-пошта на корисникот:',
                value: `\`${email}\``,
                inline: false,
              },
              {
                name: 'Датум и време:',
                value: new Date().toLocaleString('mk-MK', { timeZone: 'Europe/Skopje' }),
                inline: true,
              },
            ],
            footer: {
              text: 'Roomy Landing Page',
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error('Неуспешно испраќање до Дискорд');
    }

    return { success: true };
  } catch (error) {
    console.error("Грешка при зачувување на мејлот:", error);
    return { success: false, error: "Failed to join waitlist" };
  }
}

export async function submitFounderApplication(formData: { name: string; email: string; device: string }) {
  const webhookUrl = process.env.DISCORD_FOUNDERS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Грешка: DISCORD_FOUNDERS_WEBHOOK_URL не е поставен.");
    return { success: false, error: "Server configuration error" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [
          {
            title: '💎 НОВА FOUNDER АПЛИКАЦИЈА!',
            description: 'Корисникот сака да го осигура својот "Founder`s Legacy" статус.',
            color: 15105570, 
            fields: [
              {
                name: '👤 Име:',
                value: formData.name,
                inline: true,
              },
              {
                name: '📧 Е-пошта:',
                value: `\`${formData.email}\``,
                inline: true,
              },
              {
                name: '🥽 XR / VR Опрема:',
                value: formData.device || 'Не е наведено',
                inline: false,
              },
              {
                name: '📅 Време на аплицирање:',
                value: new Date().toLocaleString('mk-MK', { timeZone: 'Europe/Skopje' }),
                inline: false,
              },
            ],
            footer: {
              text: 'Roomy Premium Funnel',
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error('Неуспешно праќање до Дискорд');
    }

    return { success: true };
  } catch (error) {
    console.error("Грешка во submitFounderApplication:", error);
    return { success: false, error: "Failed to submit application" };
  }
}