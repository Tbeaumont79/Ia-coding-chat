<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\OpenAiService;
        
use OpenAI;
class OpenAiController extends AbstractController
{


    #[Route('/generate-text', name: 'generate_text', methods: ['POST'])]
    public function generateText(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $prompt = $data['prompt'] ?? '';
        $myApiKey = getenv('OPENAI_API_KEY');
        $myOrganization = getenv('OPENAI_ORGANIZATION');
        $client = OpenAI::client($myApiKey, $myOrganization);
        $result = $client->chat()->create([
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                ['role' => 'user', 'content' => $prompt],
            ],
        ]);
        return new JsonResponse($result);
    }
}
