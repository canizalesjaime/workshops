import os
from dotenv import load_dotenv
import discord
from ec2_metadata import ec2_metadata
import psutil

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

@client.event
async def on_message(message):
    # Don't respond to the bot's message
    if message.author == client.user:
        return

    elif message.content == 'hello world':
        await message.channel.send((
            'hello'
        ))

    elif message.content == 'Tell me about my server!':
        await message.channel.send((
            f'**Region:** {ec2_metadata.region}\n'
            f'**Public IP Address:** {ec2_metadata.public_ipv4}\n'
            f'**Private IP Address:** {ec2_metadata.private_ipv4}\n'
            f'**CPU Utilization:** {psutil.cpu_percent(interval=1)}%\n'
            f'**Load Average:** {psutil.getloadavg()}\n'
        ))

    else:
        await message.channel.send(
            'Command not found, try saying \'Tell me about my server!\''
        )

client.run(TOKEN)